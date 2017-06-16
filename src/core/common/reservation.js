/*
 * Reservation helpers
 */
define(function () {
    return {
        /**
         * getFriendlyReservationCss
         *
         * @memberOf common
         * @name  common#getFriendlyReservationCss
         * @method
         * 
         * @param  {string} status 
         * @return {string}        
         */
        getFriendlyReservationCss: function(status) {
            switch(status) {
                case 'creating': return 'label-creating';
                case 'open': return 'label-open';
                case 'closed': return 'label-closed';
                case 'cancelled': return 'label-cancelled';
                default: return '';
            }
        },
        /**
         * getFriendlyReservationStatus 
         *
         * @memberOf common
         * @name  common#getFriendlyReservationStatus
         * @method
         * 
         * @param  {string} status 
         * @return {string}        
         */
        getFriendlyReservationStatus: function(status) {
            switch(status) {
                case 'creating': return 'Draft';
                case 'open': return 'Booked';
                case 'closed': return 'Completed';
                case 'cancelled': return 'Cancelled';
                default: return 'Unknown';
            }
        },
         /**
         * isReservationOverdue
         *
         * @memberOf common
         * @name  common#isReservationOverdue
         * @method
         * 
         * @param  {object}  reservation 
         * @param  {moment}  now   
         * @return {Boolean}       
         */
        isReservationOverdue: function(reservation, now) {
            now = now || moment();
            return (reservation.status=="open") && (now.isAfter(reservation.fromDate || reservation.from));
        },
        /**
         * isReservationInThePast
         *
         * @memberOf common
         * @name  common#isReservationInThePast
         * @method
         *
         * @param  {object}  reservation
         * @param  {moment}  now
         * @return {Boolean}
         */
        isReservationInThePast: function(reservation, now) {
            now = now || moment();
            return (reservation.status=="open") && (now.isAfter(reservation.fromDate)) && (now.isAfter(reservation.toDate));
        },
        /**
         * isReservationArchived
         *
         * @memberOf common
         * @name  common#isReservationArchived
         * @method
         * 
         * @param  {object}  reservation 
         * @return {Boolean}       
         */
        isReservationArchived: function(reservation) {
            return reservation && reservation.archived != null;
        },
        /**
         * getReservationCss
         *
         * @memberOf common
         * @name  common#getReservationCss
         * @method
         * 
         * @param  {object} reservation
         * @return {string}       
         */
        getReservationCss: function(reservation) {
            if(this.isOrderArchived(reservation)){
                return this.getFriendlyReservationCss(reservation.status) + " label-striped";
            }else{
                return this.getFriendlyReservationCss(reservation.status);
            }
        }
    };
});