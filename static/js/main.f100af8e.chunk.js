(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},17:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),s=n.n(i),r=(n(17),n(4)),l=n(5),c=n(7),d=n(6),h=n(8),u=n(3),m=(n(19),n(1),n(21),n(22),function(e){function t(e,n){var o;return Object(r.a)(this,t),(o=Object(c.a)(this,Object(d.a)(t).call(this,e,n))).handleShow=o.handleShow.bind(Object(u.a)(Object(u.a)(o))),o.handleClose=o.handleClose.bind(Object(u.a)(Object(u.a)(o))),o.state={show:!1},o}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){if(!this.props.show)return null;return a.a.createElement("div",{className:"backdrop",style:{backdropStyle:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)",padding:50}}},a.a.createElement("div",{className:"modal",style:{modalStyle:{backgroundColor:"#fff",borderRadius:5,maxWidth:500,minHeight:300,margin:"0 auto",padding:30}}},this.props.children,a.a.createElement("div",{className:"footer"},a.a.createElement("button",{onClick:this.props.onClose},"Close"))))}}]),t}(a.a.Component)),b=(n(24),function(e){function t(e,n){var o;return Object(r.a)(this,t),(o=Object(c.a)(this,Object(d.a)(t).call(this,e,n))).toggleModal=function(){o.setState({isOpen:!o.state.isOpen})},o.state={isOpen:!1},o}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:this.toggleModal},"Show Modal Box"),a.a.createElement(m,{show:this.state.isOpen,onClose:this.toggleModal},"Here's some content for the modal"))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.f100af8e.chunk.js.map