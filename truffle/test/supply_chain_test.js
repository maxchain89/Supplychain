const SupplyChain = artifacts.require("SupplyChain");

contract("SupplyChain", (accounts) => {
  let supplyChain;

  before(async () => {
    supplyChain = await SupplyChain.deployed();
  });

  it("should add an item", async () => {
    console.log("inside add item test");
    await supplyChain.addItem("Item1", 100, { from: accounts[0] });
    const item = await supplyChain.readItem(0);
    assert.equal(item.name, "Item1", "Name of the first item should be Item1");
    assert.equal(item.price, 100, "Price of the first item should be 100");
    assert.equal(item.isActive, true, "Item should be active");
  });

  it("should update an item", async () => {
    await supplyChain.updateItem(0, "UpdatedItem1", 150, true, {
      from: accounts[0],
    });
    console.log("inside add update test");
    const item = await supplyChain.readItem(0);
    assert.equal(item.name, "UpdatedItem1", "Name should be UpdatedItem1");
    assert.equal(item.price, 150, "Price should be 150");
    assert.equal(item.isSold, true, "Item should be marked as sold");
  });

  it("should delete an item", async () => {
    console.log("inside delete item test");
    await supplyChain.deleteItem(0, { from: accounts[0] });
    const item = await supplyChain.readItem(0);
    assert.equal(item.isActive, false, "Item should be marked as inactive");
  });
});
