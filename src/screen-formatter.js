export default screenFormatter;
import {throttle} from 'lodash';
/** @ngInject */
function screenFormatter($rootScope, screenSize, $state) {
  // when called with isSmall prop send user to proper screen
  function respondToSize(isSmall) {
    if (isSmall) {
      $state.go('app');
    } else {
      $state.go('bigScreen');
    }
  }
  // throttled version for window resize
  const respondToSizeThrottled = throttle(respondToSize, 120);
  // called on resize when new size is different than current
  screenSize.onChange($rootScope, 'xs, sm', respondToSizeThrottled);
  // called on startup
  respondToSize(screenSize.is('xs, sm'));
}
