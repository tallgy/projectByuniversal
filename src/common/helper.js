// 弹窗
const successPop = function (that, content, timeout) {
	that.$refs.mpopup.open({
		type: 'success',
		content: content,
		timeout: timeout,
	});
};
const errorPop = function (that, content, timeout) {
	that.$refs.mpopup.open({
		type: 'err',
		content: content,
		timeout: timeout,
	});
};
const warnPop = function (that, content, timeout) {
	that.$refs.mpopup.open({
		type: 'warn',
		content: content,
		timeout: timeout,
	});
};
const infoPop = function (that, content, timeout) {
	that.$refs.mpopup.open({
		type: 'info',
		content: content,
		timeout: timeout,
	});
}


export default {
	successPop,
	errorPop,
	warnPop,
	infoPop,
}