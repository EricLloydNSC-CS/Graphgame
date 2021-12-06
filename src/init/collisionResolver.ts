export default `
export function g_raphgame_collision_resolver_helper(a, b) {
    state = 0;
    if(abs(a) <= abs(b)) {
        state = a;
    }
}

createBehavior!("collision_resolver");

setMut!("collision_resolver", "base.transform.x");
setMut!("collision_resolver", "base.transform.y");

setValAction!("collision_resolver", "base.transform.x", {
    state = x + g_raphgame_collision_resolver_helper(getVal!("collision_resolver", "base.transform.collision_x"), getVal!("collision_resolver", "base.transform.collision_y"));
});

setValAction!("collision_resolver", "base.transform.y", {
    state = y + g_raphgame_collision_resolver_helper(getVal!("collision_resolver", "base.transform.collision_y"), getVal!("collision_resolver", "base.transform.collision_x"));
});

finalizeBehavior!("collision_resolver");
`;