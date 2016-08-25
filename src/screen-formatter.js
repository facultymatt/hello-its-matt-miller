export default screenFormatter;
import {throttle} from 'lodash';

/** @ngInject */
function screenFormatter($document, $rootScope, screenSize, $state) {

  // when called with isSmall prop send user to proper screen
  function respondToSize(isSmall) {
    if (isSmall) {
      $state.go('app');
    } else {
      $state.go('bigScreen');
    }
  }
  
  // throttled version for window resize
  let respondToSizeThrottled = throttle(respondToSize, 120);
  
  // called on resize 
  // @todo throttle
  screenSize.on('xs, sm', respondToSizeThrottled, $rootScope);

  // called on startup 
  respondToSize(screenSize.is('xs, sm'));
  
}