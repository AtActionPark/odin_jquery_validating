$( document ).ready( function() {

  $( 'form' ).validate({
    submitHandler: function( form ) {
      window.location.replace("https://www.mint.com/");
    },

    invalidHandler: function( event, validator ) {
      var errors = validator.numberOfInvalids();
      if( errors ) {
        var message = ( errors === 1 ) ? 'highlighted field'
                                       : errors + ' highlighted fields';
        $( '.submit-error' ).show().find( 'span' ).html( message );
      }
    },

    // Rules to validate on the different form elements
    rules: {
      username: {
        required: true,
        email: true
      },
      'username-confirm': {
        required: true,
        equalTo: '#username',
        email: true
      },
      zipcode: {
        required: true,
        digits: true,
        rangelength: [5, 5]
      },
      password: {
        required: true,
        rangelength: [6, 32]
      },
      'password-confirm': {
        required: true,
        equalTo: '#password'
      },
      'terms': {
        required: true
      }
    },

    // Messages to display when a validation rule fails on a form element
    messages: {
      username: {
        required: 'Please enter your email address.',
        email: 'Please use a valid email address.'
      },
      'username-confirm': {
        equalTo: 'This does not match the email entered above.',
        required: 'Please re-enter your email address.',
        email: 'Please use a valid email address.'
      },
      zipcode: {
        required: 'Please enter your Zip Code.',
        digits: 'Please use only digits.',
        rangelength: 'Please use exactly 5 digits.'
      },
      password: {
        required: 'Please enter your password.',
        rangelength: jQuery.validator.format('Your password must be ' +
                                    'between {0}-{1} characters long.')
      },
      'password-confirm': {
        required: 'Please re-enter your password.',
        equalTo: 'This does not match the password entered above.'
      },
      'terms': {
        required: 'Terms of Use must be checked.'
      }
    }

  });

});