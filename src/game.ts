export class Game {
    name: string;
    price: number;
    releaseDate: Date;
    platform: string;
    genre: string;
    reviewScore: number;
    publisher: string;
    recommend: boolean;
    image: string;


    constructor(name: string, price: number, releaseDate: Date, platform: string, genre: string, reviewScore: number, publisher: string, recommend: boolean, image: string) {
        this.name = name;
        this.price = price;
        this.releaseDate = releaseDate;
        this.platform = platform;
        this.genre = genre;
        this.reviewScore = reviewScore;
        this.publisher = publisher;
        this.recommend = recommend;
        this.image = image;
    }

    display(): void {
        document.body.innerHTML += `<p class ="log info"> 🎮 Name: ${this.name}</p>`;
        document.body.innerHTML += `<p class ="log info"> 💰price: ${this.price}</p>`;
        document.body.innerHTML += `<p class ="log info"> 📅 Release Date: ${this.releaseDate}</p>`;
        document.body.innerHTML += `<p class ="log info"> 🕹️ platform: ${this.platform}</p>`;
        document.body.innerHTML += `<p class ="log info"> 🎭 Genre: ${this.genre}</p>`;
        document.body.innerHTML += `<p class ="log info"> ⭐ Review Score: ${this.reviewScore}</p>`;
        document.body.innerHTML += `<p class ="log info"> 👍👎 Recommendation: ${this.recommend ? "👍 Recommended" : "👎 Not Recommended"}</p>`;
        document.body.innerHTML += `<p class ="log info"> 🏢 Publisher: ${this.publisher}</p>`;
        document.body.innerHTML += `<img src="${this.image}" alt="${this.name}">`;
    }

    addToCart(): void {
        document.body.innerHTML += `<p class="log on">🎮 ${this.name}: ${this.recommend ? "✅ Added to Cart" : "❌ Not Added to Cart"}</p>`;
    }
    install(): void {
        document.body.innerHTML += `<p class="log on">📥 ${this.name} installation in progress</p>`;
    }
    review(): void {
        document.body.innerHTML += `<p class="log on">⭐ ${this.name} Review Score: ${this.reviewScore}</p>`;
    }
    recommendation(): void {
        document.body.innerHTML += `<p class="log on">👍👎 ${this.name} Recommendation: ${this.recommend ? "👍 Recommended" : "👎 Not Recommended"}</p>`;
    }
    wishlist(): void {
        document.body.innerHTML += `<p class="log on">❤️ ${this.name}: ${this.recommend ? "✅ Added to Wishlist" : "❌ Not Added"}</p>`;
    }
    refund(): void {
        document.body.innerHTML += `<p class="log on">💸 ${this.name}: ${this.recommend ? "✅ Refund Approved" : "❌ Refund Denied"}</p>`;
    }
}