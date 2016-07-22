'use strict';

const rules = {
  totals: {
    _read: true,
    _write: false,
  },
  userProfiles: {
    $uid: {
      _read: 'auth != null && auth.uid == $uid',
      _write: 'auth != null && auth.uid == $uid && data.val() == null',
    },
  },
  userStatuses: {
    $uid: {
      _read: 'auth != null && auth.uid == $uid',
      _write: 'auth != null && auth.uid == $uid && newData.child("previousStatus").val() == data.child("status").val()',
    },
  },
};

module.exports = rules;
