class Song {
    constructor(stt,name, lyrics, category) {
        this.stt = stt
        this.name = name
        this.lyrics = lyrics
        this.category = category
    }
    getStt(){
        return this.stt
    }
    setStt(stt){
        this.stt = stt
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getLyrics() {
        return this.lyrics
    }

    setLyrics(lyrics) {
        this.lyrics = lyrics
    }

    getCategory() {
        return this.category
    }

    setCategory(category) {
        this.category = category
    }
}