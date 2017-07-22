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
    boxShadow             : '0px 0px 20px 8px rgba(40, 40, 40, .65)',
    backgroundColor       : 'rgba(245, 245, 245, 1)',
    margin                : '0',
    minHeight             : '500px',
    borderRadius          : '0px',
    overflow              : 'hidden',
    width                 : '270px',
    fontFamily            : 'sans-serif',
    fontWeight            : '600'
  }
};

export default ModalStyle;
