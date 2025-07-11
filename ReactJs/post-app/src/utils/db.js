import localforage from 'localforage';

// Configure IndexedDB
localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'ReactRouterDemo',
  storeName: 'posts_store'
});

 const db = {
    async getPosts() {
        return (await localforage.getItem('posts')) || [];
    },
  
    async getPost(id) {
        const posts = await this.getPosts();
        return posts.find(post => post.id == id);
    },
  
    async savePost(post) {
    if (!post.id) {
        post.id = Date.now()
    }

    if (!post.createdAt) {
        post.createdAt = new Date().toISOString(); 
    }

    const posts = await this.getPosts();
    const existingIndex = posts.findIndex(p => p.id == post.id);

    if (existingIndex >= 0) {
        posts[existingIndex] = post;
    } else {
        posts.push(post);
    }

    await localforage.setItem('posts', posts);
    return post;
    },
  
    async deletePost(id) {
        const posts = await this.getPosts();
        const filtered = posts.filter(post => post.id != id);
        await localforage.setItem('posts', filtered);
    }
    };

export default db;