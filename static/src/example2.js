
// React Nesting Example

var ARow = React.createClass({
  render: function() {
    return (
      <div>
        <h1>ARow</h1>
      </div>
    );
  }
});

var BRow = React.createClass({
  render: function() {
    return (
      <div>
        <h1>BRow</h1>
        <ARow />
      </div>
    );
  }
});

var CRow = React.createClass({
  render: function() {
    return (
      <div>
        <h1>CRow</h1>
        <BRow />
      </div>
    );
  }
});

var DRow = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Hey David asdfkjasdlfjdsf</h2>
        <ARow />
        <BRow />
        <CRow />
        <CRow />
        <CRow />
      </div>
    );
  }
});


React.render(
  <DRow />,
  document.getElementById('content')
);
