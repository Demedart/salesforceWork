({
    doInit : function(cmp, helper) {
        helper.getFirstPicture(cmp);
        console.log('idImages : ' + cmp.get('v.idImages'));
        console.log('prefixUrl : ' + cmp.get('v.prefixUrl'));
        console.log('url : ' + cmp.get('v.url'));
        console.log('pathToPictureWithoutId : ' + cmp.get('v.pathToPictureWithoutId'));
        console.log('selectedPictureNumber : ' + cmp.get('v.selectedPictureNumber'));
        console.log('selectedPicture : ' + cmp.get('v.selectedPicture'));
    },

    handlePreviousNext: function(cmp, event, helper) {
        helper.setPreviousNextPicture(cmp, event);
    }
});