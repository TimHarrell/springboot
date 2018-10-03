define('ember-ajax/errors', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isAjaxError = isAjaxError;
    exports.isUnauthorizedError = isUnauthorizedError;
    exports.isForbiddenError = isForbiddenError;
    exports.isInvalidError = isInvalidError;
    exports.isBadRequestError = isBadRequestError;
    exports.isNotFoundError = isNotFoundError;
    exports.isGoneError = isGoneError;
    exports.isTimeoutError = isTimeoutError;
    exports.isAbortError = isAbortError;
    exports.isConflictError = isConflictError;
    exports.isServerError = isServerError;
    exports.isSuccess = isSuccess;
    class AjaxError extends Ember.Error {
        constructor(payload, message = 'Ajax operation failed', status) {
            super(message);
            this.payload = payload;
            this.status = status;
        }
    }
    exports.AjaxError = AjaxError;
    class InvalidError extends AjaxError {
        constructor(payload) {
            super(payload, 'Request was rejected because it was invalid', 422);
        }
    }
    exports.InvalidError = InvalidError;
    class UnauthorizedError extends AjaxError {
        constructor(payload) {
            super(payload, 'Ajax authorization failed', 401);
        }
    }
    exports.UnauthorizedError = UnauthorizedError;
    class ForbiddenError extends AjaxError {
        constructor(payload) {
            super(payload, 'Request was rejected because user is not permitted to perform this operation.', 403);
        }
    }
    exports.ForbiddenError = ForbiddenError;
    class BadRequestError extends AjaxError {
        constructor(payload) {
            super(payload, 'Request was formatted incorrectly.', 400);
        }
    }
    exports.BadRequestError = BadRequestError;
    class NotFoundError extends AjaxError {
        constructor(payload) {
            super(payload, 'Resource was not found.', 404);
        }
    }
    exports.NotFoundError = NotFoundError;
    class GoneError extends AjaxError {
        constructor(payload) {
            super(payload, 'Resource is no longer available.', 410);
        }
    }
    exports.GoneError = GoneError;
    class TimeoutError extends AjaxError {
        constructor() {
            super(null, 'The ajax operation timed out', -1);
        }
    }
    exports.TimeoutError = TimeoutError;
    class AbortError extends AjaxError {
        constructor() {
            super(null, 'The ajax operation was aborted', 0);
        }
    }
    exports.AbortError = AbortError;
    class ConflictError extends AjaxError {
        constructor(payload) {
            super(payload, 'The ajax operation failed due to a conflict', 409);
        }
    }
    exports.ConflictError = ConflictError;
    class ServerError extends AjaxError {
        constructor(payload, status) {
            super(payload, 'Request was rejected due to server error', status);
        }
    }
    exports.ServerError = ServerError;
    /**
     * Checks if the given error is or inherits from AjaxError
     */
    function isAjaxError(error) {
        return error instanceof AjaxError;
    }
    /**
     * Checks if the given status code or AjaxError object represents an
     * unauthorized request error
     */
    function isUnauthorizedError(error) {
        if (isAjaxError(error)) {
            return error instanceof UnauthorizedError;
        } else {
            return error === 401;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a forbidden
     * request error
     */
    function isForbiddenError(error) {
        if (isAjaxError(error)) {
            return error instanceof ForbiddenError;
        } else {
            return error === 403;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents an invalid
     * request error
     */
    function isInvalidError(error) {
        if (isAjaxError(error)) {
            return error instanceof InvalidError;
        } else {
            return error === 422;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a bad request
     * error
     */
    function isBadRequestError(error) {
        if (isAjaxError(error)) {
            return error instanceof BadRequestError;
        } else {
            return error === 400;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a "not found"
     * error
     */
    function isNotFoundError(error) {
        if (isAjaxError(error)) {
            return error instanceof NotFoundError;
        } else {
            return error === 404;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a "gone"
     * error
     */
    function isGoneError(error) {
        if (isAjaxError(error)) {
            return error instanceof GoneError;
        } else {
            return error === 410;
        }
    }
    /**
     * Checks if the given object represents a "timeout" error
     */
    function isTimeoutError(error) {
        return error instanceof TimeoutError;
    }
    /**
     * Checks if the given status code or AjaxError object represents an
     * "abort" error
     */
    function isAbortError(error) {
        if (isAjaxError(error)) {
            return error instanceof AbortError;
        } else {
            return error === 0;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a
     * conflict error
     */
    function isConflictError(error) {
        if (isAjaxError(error)) {
            return error instanceof ConflictError;
        } else {
            return error === 409;
        }
    }
    /**
     * Checks if the given status code or AjaxError object represents a server error
     */
    function isServerError(error) {
        if (isAjaxError(error)) {
            return error instanceof ServerError;
        } else {
            return error >= 500 && error < 600;
        }
    }
    /**
     * Checks if the given status code represents a successful request
     */
    function isSuccess(status) {
        let s = status;
        if (typeof status === 'string') {
            s = parseInt(status, 10);
        }
        return s >= 200 && s < 300 || s === 304;
    }
});