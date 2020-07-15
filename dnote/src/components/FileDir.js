import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';



const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});




const data = {
  id: 'root',
  label: 'World',
  children: [
    {id:"root/1", label:"party"}, {id:"root/2", label:"places"}, {id:"root/3", label:"items"}, {id:"root/4", label:"misc"},
    {
      id: 'root/sub1',
      label: 'Events',
      children: [
        {id:"root/sub1/1", label:"This year"}, {id:"root/sub1/2", label:"This month"}, {id:"root/sub1/3", label:"This week"}, {id:"root/sub1/4", label:"Today"}
      ],
    },
  ],
};


function FileTree(handleSelect) {
  
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={(e, v) => handleSelect(e, v)}>
      {renderTree(data)}
    </TreeView>
  );
}





 export default class FileSystem extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {selectedId: ""};
    this.handleSelect = props.handleSelect.bind(this);
  }

  render() {
    return (
      <div>
        {FileTree(this.handleSelect)}
      </div>
    );
  }
  
}


/*
function file(id, label)
{
  return (<TreeItem nodeId={id} label={label}/>);
}

function folder(id, label, children)
{
  return (
    <TreeItem nodeId={id} label={label}>
      {children.map((item, index) => (file(item.id, item.label)))}
    </TreeItem>
  );
}

var children = [{id:"root1", label:"Party"}, {id:"root2", label:"places"}, {id:"root3", label:"items"}, {id:"root4", label:"misc"}];
var children2 = [{id:"rootA1", label:"This year"}, {id:"rootB1", label:"This month"}, {id:"rootC1", label:"This week"}, {id:"rootD1", label:"Today"}];

function Node(id, label, leaves, nodes, leaves2) {

    return (
      <TreeItem nodeId={id} label={label}>
        {leaves.map((item, index) => (file(item.id,  item.label)))}
        {folder(nodes[0].id, nodes[0].label, leaves2)}
      </TreeItem>
    );
}

  handleSelect(event, value) {
    event.preventDefault();
    console.log(value);
    this.setState = {selectedId: value};
    var ret = value.replace('/', '');
    this.quillRef.handleFileSelection(ret);
  }
*/