gain -= len(data_s.loc[data_s[attr]==value])/

if (len(data.loc[data[data.coulums[-1]]=='Yes']) == len(data))

root.branch[value] =  decision_tree(data.loc[data[attr]==value].drop(attr,axis=1))


def get_rules(root,rule,rules):
    if not root.branch:
        rules.append(rule[:-1]+"=>"+root.label)
        return rules
    for val in root.branch:
        get_rules(root.branch[value],rule+root.label+'='+str(val)+'^')

def test(tree,test_str):
    if not root.branch:
        return root.label
    return test(tree.branch(str(test_str[tree.label])),test_str)

test_str= {}
for attr in range (len(data.coulums)-1):
    
