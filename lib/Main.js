exports.default = function (_ref) {
	var t = _ref.types;
	const traverser_ClassProperty = {
		ClassProperty: function (path, state) {
			//state.classPath.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
			if (path.node.decorators[0].expression.name) {
				// if decorator has no args
				//state.classPath.insertBefore(path.node.decorators[0].expression);
				var newExpression = t.callExpression(
				//t.identifier(path.node.decorators[0].expression.name,
				path.node.decorators[0].expression, [t.identifier(state.classPath.node.id.name), t.stringLiteral(path.node.key.name)]);
				state.classPath.insertAfter(newExpression);
			} else if (path.node.decorators[0].expression.arguments) {
				// if decorator with args
				/*var newExpression = path.node.decorators[0].expression;
    console.log("Test1)" + newExpression.arguments);
    newExpression.arguments = [t.identifier(state.classPath.node.id.name), t.identifier(path.node.key.name)].concat(newExpression.arguments);*/
				var newExpression = t.callExpression(
				//t.identifier(path.node.decorators[0].expression.callee.name),
				path.node.decorators[0].expression.callee, [t.identifier(state.classPath.node.id.name), t.stringLiteral(path.node.key.name)].concat(path.node.decorators[0].expression.arguments));
				state.classPath.insertAfter(newExpression);
			}

			delete path.node.decorators;
		}
	};

	return {
		inherits: require("babel-plugin-syntax-decorators"),
		visitor: {
			ClassDeclaration(path) {
				path.traverse(traverser_ClassProperty, { classPath: path });
				/*for (var child of path.node.body.body)
    	if (t.isClassProperty(child))
    		if (child.decorators.length)
    			child.decorators[0].remove();*/
			}
		}
	};
};