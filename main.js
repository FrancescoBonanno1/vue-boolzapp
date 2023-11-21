const { createApp } = Vue;
createApp({

    data() {
        return {
            Contatti: [{
                foto: `img/avatar_1.jpg`,
                nome: `Michele`,
                messaggi:{
                    testo :["ciao, tutto bene?", "va bene, fammi sapere", "per caso hai preso la mia borsa dimensionale?"],
                    inviato : true
                },
                ora: `12.00`
            },
            {
                foto: `img/avatar_2.jpg`,
                nome: `Fabio`,
                ultimomessaggio: ``,
                ora: `12.00`
            },
            {
                foto: `img/avatar_3.jpg`,
                nome: `Samuele`,
                ultimomessaggio: ``,
                ora: `12.00`
            },

            {
                foto: `img/avatar_4.jpg`,
                nome: `Davide`,
                ultimomessaggio: ``,
                ora: `12.00`
            },

            {
                foto: `img/avatar_5.jpg`,
                nome: `alessandro B.`,
                ultimomessaggio: ``,
                ora: `12.00`
            },

            {
                foto: `img/avatar_6.jpg`,
                nome: `Alessandro L`,
                ultimomessaggio: ``,
                ora: `12.00`
            },
            {
                foto: `img/avatar_7.jpg`,
                nome: `Claudia`,
                ultimomessaggio: ``,
                ora: `12.00`
            },
            {
                foto: `img/avatar_8.jpg`,
                nome: `Federico`,
                ultimomessaggio: ``,
                ora: `12.00`
            },
            ],
            id:[{
                foto: `img/avatar_io.jpg`,
                nome : `Sofia`,
                messaggi :``
            }],

        };

    },

    methods: {
    
        },

    mounted() {


    }
}).mount(`#app`);
