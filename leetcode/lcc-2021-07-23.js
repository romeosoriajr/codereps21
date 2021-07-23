function pruneTree (root) {                                                     
                                                                                
  if (!root) return null;                                                            
  root.left = pruneTree(root.left);                                             
  root.right = pruneTree(root.right);                                           
  if (root.val == 0) {                                                         
    if (!root.left && !root.right) {                                            
      return null;                                                              
    };                                                                          
  };                                                                            
                                                                                
  return root;                                                                  
                                                                                
}
