export default `
createBehavior!("circle");

//TODO: Implement rotation.
behaviorCustom!("circle", {
    graph { {
        const p1 = x-getVal!("circle", "base.transform.x");
        const p2 = y-getVal!("circle", "base.transform.y");

        state = (p1^2)/getVal!("circle", "base.transform.scale_x") + (p2^2)/getVal!("circle", "base.transform.scale_y");
    } } = { 1 };
}, -100);

finalizeBehavior!("circle");
`;