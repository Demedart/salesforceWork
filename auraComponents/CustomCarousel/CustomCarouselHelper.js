({
    getFirstPicture : function(cmp) {
        cmp.set('v.selectedPicture', cmp.get('v.idImages')[0]);
    },

    setPreviousNextPicture : function(cmp, event) {
        let pictures                = cmp.get('v.idImages');
        let pushedButtonSource      = event.getSource().get('v.value');
        let currentPictureNumber    = cmp.get("v.selectedPictureNumber");

        pushedButtonSource === 'next'
            ? currentPictureNumber = currentPictureNumber === (pictures.length - 1)
                ? 0
                : currentPictureNumber + 1
            : currentPictureNumber = currentPictureNumber === 0
                ? pictures.length - 1
                : currentPictureNumber - 1;

        cmp.set('v.selectedPictureNumber',  currentPictureNumber + 1);
        cmp.set('v.selectedPicture',        pictures[currentPictureNumber]);
        console.log('All pictures :: ' + pictures)
        console.log('Pcture : ' + pictures[currentPictureNumber]);
    }
});