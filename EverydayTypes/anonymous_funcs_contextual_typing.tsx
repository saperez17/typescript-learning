//Anonymous functions have something very special called contextual typing.
const JS_FRAMEWORKS = ["React (best)", "Angular", "VUE"]

JS_FRAMEWORKS.forEach((framework) => {
    //console.log(framework.toUppercase()); // -> TS knows the framework variable should be of the same type of JS_FRAMEWORK, this is contextual tping
    console.log(framework.toUpperCase());
})
