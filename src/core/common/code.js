/**
 * QR and barcode helpers
 */
define(function () {
    return {
    	/**
         * isCodeValid
         *
         * @memberOf common
         * @name  common#isCodeValid
         * @method
         * 
    	 * @param  codeId
    	 * @return {Boolean}       
    	 */
		isCodeValid: function(codeId){
			// Checks if a code is syntactically valid
	        // This does not mean that it is an official code issued by CHEQROOM
	        return codeId.trim().match(/^[a-z0-9]{8}$/i) != null;
		},
		/**
		 * isCodeFromScanner
		 *
		 * @memberOf common
		 * @name  common#isCodeFromScanner
		 * @method
		 * 
		 * @param  urlPart
		 * @return {Boolean}        
		 */
		isCodeFromScanner: function(urlPart){
			var prefix = urlPart.substring(0,23);
	        var index = 'http://cheqroom.com/qr/'.indexOf(prefix);
	        return (index==0);
		},
		/**
		 * getCheqRoomRedirectUrl
		 *
		 * @memberOf  common
		 * @name  common#getCheqRoomRedirectUrl
		 * @method
		 * 
		 * @param  codeId 
		 * @return {string}       
		 */
		getCheqRoomRedirectUrl: function(codeId){
			return this.isCodeValid(codeId) ? 'http://cheqroom.com/qr/' + codeId.trim() : '';
		},
		/**
		 * getCheqRoomRedirectUrlQR 
		 *
		 * @memberOf  common
		 * @name  common#getCheqRoomRedirectUrlQR
		 * @method
		 * 
		 * @param  codeId 
		 * @param  size   
		 * @return {string}      
		 */
		getCheqRoomRedirectUrlQR: function(codeId, size){
			 if (this.isCodeValid(codeId)) {
	            //https://chart.googleapis.com/chart?chs=200x200&cht=qr&choe=UTF-8&chld=L|0&chl=http://cheqroom.com/qr/c4ab3a6a
	            var url = encodeURI(this.getCheqRoomRedirectUrl(codeId));
	            return 'https://chart.googleapis.com/chart?chs=' + size + 'x' + size + '&cht=qr&choe=UTF-8&chld=L|0&chl=' + url;
	        } else {
	            return '';
	        }
		}
    };
});
