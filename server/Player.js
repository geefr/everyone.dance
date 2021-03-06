module.exports = class Player
{
    constructor(client)
    {
        this.client = client;
        this.background_color = this.getRandomBackgroundColor();
        this.name = `Player ${Math.ceil(Math.random() * 1000)}`;
        this.data = {"PlayerNumber_P1": {song_info: {}, steps_info: {}}}
        this.spectate = false; // If this player joined through the website and is spectating
    }

    getName()
    {
        return (typeof this.name != 'undefined' && this.name.length > 0) ? this.name : "???"
    }
    
    getRandomBackgroundColor()
    {
        const hue = Math.random();
        const saturation = 0.6 + Math.random() * 0.4
        const lightness = 0.7 + Math.random() * 0.2
        const hue_complement = hue + Math.random() * 0.3
        const saturation_complement = 0.5 + Math.random() * 0.5
        const lightness_complement = 0.7 + Math.random() * 0.2
        return `linear-gradient(-45deg, 
                    hsl(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%) 0%, 
                    hsl(${hue_complement * 360}, ${saturation_complement * 100}%, ${lightness_complement * 100}%) 100%)`
    }

    /**
     * Returns all synced data for a player or a specific field only, if specified
     * @param {*} field 
     */
    getSyncData(field)
    {
        const sync_data = {
            id: this.client.id,
            name: this.name,
            background_color: this.background_color,
            data: this.data,
            spectate: this.spectate
        }

        return typeof field == 'undefined' ? sync_data : {[field]: sync_data[field]}
    }

    /**
     * Returns only data that should be synced while ingame, such as step judgements and progress
     */
    getIngameSyncData()
    {
        return {
            id: this.client.id,
            data: this.data
        }
    }

}