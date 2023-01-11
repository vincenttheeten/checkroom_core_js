import imageHelper from './image';

export default {
	/**
	 * getUserImageUrl
	 *
	 * @memberOf common
	 * @name  common#getUserImageUrl
	 * @method
	 *
	 * @param  cr.User or user object
	 * @return {string} image path or base64 image
	 */
	getUserImageUrl: function (ds, user, size, bustCache) {
		// Show profile picture of user?
		if (user && user.picture) return imageHelper.getImageUrl(ds, user.picture, size, bustCache);

		// Show avatar initials
		return imageHelper.getAvatarInitial(user.name, size);
	},
};
