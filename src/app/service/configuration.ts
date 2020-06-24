export class Configuration {
	//dev nurindo
	public static get BASE_URL_VIDEO(): string { return "https://api.dailymotion.com/"; };
	public static get BASE_URL_ARTICLE(): string { return "http://newsapi.org/"; }

	public static get GET_VIDEOS(): string { return "videos"; };
	public static get GET_ARTICLES(): string { return "v2/top-headlines" }

}