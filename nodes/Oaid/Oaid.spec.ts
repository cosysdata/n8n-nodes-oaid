import {Petstore} from "./Oaid.node";

test("smoke", () => {
    const node = new Oaid()
    expect(node.description.properties).toBeDefined()
})
