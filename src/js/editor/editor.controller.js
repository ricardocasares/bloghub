export default class EditorCtrl {
  // @ngInject
  constructor(Articles, article, $state) {
    this._Articles = Articles;
    this._$state = $state;

    if (!article) {
      this.article = {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    } else {
      this.article = article;
    }

  }

  addTag() {
    // array includes method
    if (!this.article.tagList.includes(this.tagField) && !this.isSubmitting) {
      this.article.tagList.push(this.tagField);
      this.tagField = '';
    }
  }

  removeTag(tagName) {
    if (!this.isSubmitting) {
      this.article.tagList = this.article.tagList.filter((slug) => slug != tagName);
    }
  }

  submit() {
    this.isSubmitting = true;

    this._Articles.save(this.article).then(
      (newArticle) => {
        this._$state.go('app.article', { slug: newArticle.slug });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }
}
