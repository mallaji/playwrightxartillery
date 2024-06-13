const { login } = require('../commands/login');

async function artilleryScript(page, Vucontext, events, test) {
    const {step}= test;
    // Output current metrics - incrementing a custom counter
    events.emit('counter', `user.${Vucontext.scenario.name}.page_loads`, 1);

    await step("Login",async()=>
    {
        await login(page);
    })
}

module.exports = {
    artilleryScript
};
