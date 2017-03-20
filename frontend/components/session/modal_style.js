const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(60, 56, 56, .6)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    boxShadow             : '5px 10px 10px 0px rgba(40, 40, 40, .6)',
    backgroundColor       : 'rgba(245, 245, 245, 1)',
    margin                : '0',
    minWidth              : '265px',
    minHeight             : '503px',
    borderRadius          : '0px',
    overflow              : 'hidden',
    maxWidth              :  '300px',
    fontFamily            : 'sans-serif',
    fontWeight            : '600'
  }
};

export default ModalStyle;
