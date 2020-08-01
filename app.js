const uid = () => Math.random().toString(32).slice(2);

const articles = [
  {
    id: uid(),
    image: 'images/submissions/image-aqua.png',
    name: 'aqua',
    heading: 'Article heading',
    desc: 'Vue.js is really fun and easy for beginners',
    avatar: 'images/avatars/daniel.jpg',
    author: 'daniel',
    voteCount: 10
  },
  {
    id: uid(),
    image: 'images/submissions/image-rose.png',
    name: 'rose',
    heading: 'Article heading',
    desc: 'Vue.js is really fun and easy for beginners',
    avatar: 'images/avatars/kristy.png',
    author: 'kristy',
    voteCount: 17
  },
  {
    id: uid(),
    image: 'images/submissions/image-steel.png',
    name: 'steel',
    heading: 'Article heading',
    desc: 'Vue.js is really fun and easy for beginners',
    avatar: 'images/avatars/molly.png',
    author: 'molly',
    voteCount: 8
  },
  {
    id: uid(),
    image: 'images/submissions/image-yellow.png',
    name: 'yellow',
    heading: 'Article heading',
    desc: 'Vue.js is really fun and easy for beginners',
    avatar: 'images/avatars/veronika.jpg',
    author: 'veronika',
    voteCount: 5
  }
];

const BlogArticle = {
	template: `
  <article class="article">
    <figure class="article__figure">
      <img :src="article.image" :alt="article.name" class="article__img">
    </figure>
    <div class="article__post">
      <a class="article__heading" href="#">{{ article.heading }}</a>
      <p class="article__desc">{{ article.desc }}</p>
      <div class="article__author">
        <p>Author: </p>
        <img :src="article.avatar" :alt="article.author" class="article__avatar">
      </div>
    </div>
    <div class="article__upvote">
      <button class="article__upvote-btn" @click="increaseVoteCount">
        <svg class="article__upvote-icon">
          <use xlink:href="sprite.svg#icon-chevron-up"></use>
        </svg>
      </button>
      <p class="article__vote-count">{{ article.voteCount }}</p>
    </div>
  </article>
  `,
  props: {
    article: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      noOfVoteCounts: this.article.voteCount
    }
  },
  methods: {
    increaseVoteCount() {
      this.noOfVoteCounts++;
      this.$emit('update-vote-count', this.article.id);
    }
  }
};

new Vue({
  el: '#app',
  data: {
    articles
  },
	components: {
    BlogArticle
  },
  computed: {
    sortedArticles() {
      return this.articles.sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
    }
  },
  methods: {
    updateVoteCount(id) {
      articles.forEach(article => {
        if(article.id === id) article.voteCount++;
      });
    }
  }
});


