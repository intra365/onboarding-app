import { suggestedUPNs, suggestedUPNprefix } from ".";

it("Test Niels Gregers Johansen", async () => {
  var value: suggestedUPNprefix[] = await suggestedUPNs(
    "Niels Gregers Johansen"
  );
  console.log(value);
  expect(value.length).toBe(2);
  expect(value[0].prefix).toBe("niels.johansen");
  expect(value[1].prefix).toBe("niels.gregers.johansen");
});

it("Test First Second Third Van Ding", async () => {
  var value: suggestedUPNprefix[] = await suggestedUPNs(
    "First Second Third Van-Ding"
  );
  console.log(value);
  expect(value.length).toBe(3);
  expect(value[0].prefix).toBe("first.van-ding");
  //expect(value[2].prefix).toBe("first.second.third.van-ding")
});

it("Test Niels Johansen", async () => {
  var value: suggestedUPNprefix[] = await suggestedUPNs("Niels Johansen");
  console.log(value);
  expect(value.length).toBe(1);
  expect(value[0].prefix).toBe("niels.johansen");
});

it("Test Karlo Mrakovčić <karlo.mrakovcic@nexigroup.com>", async () => {
  var value: suggestedUPNprefix[] = await suggestedUPNs("Karlo Mrakovčić");
  console.log(value);
  expect(value.length).toBe(1);
  expect(value[0].prefix).toBe("karlo.mrakovcic");
});
