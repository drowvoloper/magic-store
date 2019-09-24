  const handleClick = event => {
    const itemDetails = event.currentTarget.nextSibling;
     itemDetails.classList.remove('disabled') 
  }

  const handleClose = event => {
    const itemDetails = event.currentTarget.parentNode;
    itemDetails.classList.add('disabled');
  }

module.exports.handleClick = handleClick;
module.exports.handleClose = handleClose;
