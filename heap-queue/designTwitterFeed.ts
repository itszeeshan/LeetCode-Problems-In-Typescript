class Twitter {
    private tweets: Map<number, { tweetId: number, time: number }[]>;
    private followers: Map<number, Set<number>>;
    private time: number;

    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.time = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId)?.push({ tweetId, time: this.time++ });
    }

    getNewsFeed(userId: number): number[] {
        const recentTweets: { tweetId: number, time: number }[] = [];

        const followees = this.followers.get(userId) || new Set();
        followees.add(userId);

        for (const followee of followees) {
            const tweets = this.tweets.get(followee) || [];
            recentTweets.push(...tweets);
        }

        return recentTweets
            .sort((a, b) => b.time - a.time)
            .slice(0, 10)
            .map(tweet => tweet.tweetId);
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId)?.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        this.followers.get(followerId)?.delete(followeeId);
    }
}

const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // Output: [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // Output: [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // Output: [5]
