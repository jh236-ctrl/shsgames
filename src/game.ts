export type GameRunner = "EMULATOR_GBA" | "EMULATOR_NES" | "IFRAME" | "UNITY" | "RUFFLE";

export interface Game {
	name: string;
	runner: GameRunner;
	thumbnail: string;
	game: string;
	aspectRatio?: number;
	width?: number;
}

export default <Game[]>[
	// PARKER GAMES
	{
		name: "prkr's Agario",
		runner: "IFRAME",
		game: "https://glitch.me",
		thumbnail: "https://jsdelivr.net",
		width: 1200,
		aspectRatio: 16 / 9
	},

	// IFRAME GAMES
	{
		name: "1v1.lol",
		runner: "IFRAME",
		game: "https://googleusercontent.com",
		thumbnail: "https://jsdelivr.net",
		width: 1200,
		aspectRatio: 16 / 9
	}, {
		name: "Baldi's Basic",
		runner: "IFRAME",
		game: "/built-games/baldis-basics/index.html",
		thumbnail: "https://jsdelivr.net",
		width: 800,
		aspectRatio: 800 / 600
	}, {
		name: "Chrome Dino",
		runner: "IFRAME",
		game: "/built-games/chromedino/index.html",
		thumbnail: "https://jsdelivr.net",
		width: 600,
		aspectRatio: 3
	}, {
		name: "Cookie Clicker",
		runner: "IFRAME",
		game: "/built-games/cookieclicker/index.html",
		thumbnail: "https://jsdelivr.net",
		width: 1080,
		aspectRatio: 3 / 2
	}, {
		name: "CSGOClicker",
		runner: "IFRAME",
		game: "/built-games/CSGOClicker/index.html",
		thumbnail: "https://jsdelivr.net",
		width: 1080,
		aspectRatio: 5 / 3
	}, {
		name: "Tanuki Sunset",
		runner: "IFRAME",
		game: "/built-games/takumiraccoon/index.html",
		thumbnail: "https://jsdelivr.net",
		width: 800,
		aspectRatio: 800 / 660
	},

	// UNITY GAMES
	{
		name: "Slope",
		runner: "UNITY",
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Falling Ball",
		runner: "UNITY",
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net",
		aspectRatio: 16 / 9,
		width: 1200
	}, {
		name: "Rooftop Snipers",
		runner: "UNITY",
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net",
		aspectRatio: 16 / 9,
		width: 793
	}, {
		name: "Subway Surfers",
		runner: "UNITY",
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net",
		aspectRatio: 16 / 9,
		width: 1200
	},

	// NES GAMES
	{
		name: "Bubble Bobble",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Blades of Steel",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Castlevania",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Clu Clu Land",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Contra",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Donkey Kong",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Double Dribble",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Dr. Mario",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "DuckTales",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Earthbound Zero",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Excitebike",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Final Fantasy",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Final Fantasy 2",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Final Fantasy 3",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Galaga",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Hoops",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Ice Hockey",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Ice Hockey - Blue Ice Edition",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Kid Icarus",
		runner: "EMULATOR_NES",
		aspectRatio: 16 / 15,
		width: 640,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	},

	// GBA GAMES
	{
		name: "Pokemon Emerald",
		runner: "EMULATOR_GBA",
		aspectRatio: 3 / 2,
		width: 480,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}, {
		name: "Mario Kart Super Circuit",
		runner: "EMULATOR_GBA",
		aspectRatio: 3 / 2,
		width: 480,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	},

	// RUFFLE GAMES
	{
		name: "Fancy Pants Adventure",
		runner: "RUFFLE",
		aspectRatio: 4 / 3,
		width: 800,
		game: "https://jsdelivr.net",
		thumbnail: "https://jsdelivr.net"
	}
];
