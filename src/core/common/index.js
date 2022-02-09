import code from './code';
import order from './order';
import reservation from './reservation';
import item from './item';
import conflicts from './conflicts';
import keyvalues from './keyValues';
import image from './image';
import attachment from './attachment';
import inflection from './inflection';
import validation from './validation';
import utils from './utils';
import kit from './kit';
import contact from './contact';
import user from './user';
import template from './template';
import clientStorage from './clientStorage';
import _document from './document';
import transaction from './transaction';
import queue from './queue';
import changeLog from './changeLog';
import spotcheck from './spotcheck';
import DeferredPromise from './deferredPromise';
import Slimdown from './slimdown';

export {
	code,
	order,
	reservation,
	item,
	conflicts,
	keyvalues,
	image,
	attachment,
	validation,
	utils,
	kit,
	contact,
	user,
	template,
	_document,
	transaction,
	changeLog,
	spotcheck,
	queue,
	DeferredPromise,
};

export default {
	ajaxQueue: queue,
	DeferredPromise,
	Slimdown,
	...code,
	...order,
	...reservation,
	...item,
	...conflicts,
	...keyvalues,
	...image,
	...attachment,
	...validation,
	...utils,
	...kit,
	...contact,
	...user,
	...template,
	..._document,
	...transaction,
	...changeLog,
	...spotcheck,
};
