const setLocalStorage = (id, data) => {
    window.mock.setItem(id, JSON.stringify(data));
};

test("Adding data works", () => {
    const mockId = "1";
    const mockJson = { data: "JSON" };
    setLocalStorage(mockId, mockJson);
    expect(mock.getItem(mockId)).toEqual(JSON.stringify(mockJson));
});

describe("Set local storage item", () => {
    beforeEach(() => {
        window.mock.clear();
    });

    test("data gets added to local storage", () => {
        const mockId = "123";
        const mockJson = { data: "JSON" };
        setLocalStorage(mockId, mockJson);
        expect(mock.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });

    test("Overwriting works", () => {
        const mockId = "234";
        const mockOldData = { data: "old JSON" };
        const mockNewData = { data: "new JSON" };

        window.mock.setItem(mockId, JSON.stringify(mockOldData));
        expect(mock.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

        setLocalStorage(mockId, mockNewData);
        window.mock.setItem(mockId, JSON.stringify(mockNewData));
    });

    test("only holds one ID", () => {
        const mockId = "345";
        const mockOldData = { data: "old JSON" };
        const mockNewData = { data: "new JSON" };

        window.mock.setItem(mockId, JSON.stringify(mockOldData));
        setLocalStorage(mockId, mockNewData);

        const allItems = window.mock.getAll();

        expect(Object.keys(allItems).length).toBe(1);
    });
});