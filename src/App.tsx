import React, { useEffect, useRef } from "react";
import Dropdown from "./components/ui/Dropdown";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  const [person, setPerson] = React.useState("pedro");
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);

  return (
    <div>
      <Dropdown>
        <Dropdown.Button>Dropdown Button</Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.Group>
            <Dropdown.Item className="flex items-center">
              Item 1 <Dropdown.Shortcut>⌘+S</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Separator />
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.RadioGroup value={person} onValueChange={setPerson}>
            <Dropdown.RadioItem value="petik">Item 4</Dropdown.RadioItem>
            <Dropdown.RadioItem value="peto">Item 5</Dropdown.RadioItem>
          </Dropdown.RadioGroup>
          <Dropdown.Separator />
          <Dropdown.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Checkbox Item 1
          </Dropdown.CheckboxItem>
          <Dropdown.Sub>
            <Dropdown.SubButton>Sub Item</Dropdown.SubButton>
            <Dropdown.SubContent>
              <Dropdown.Item>Sub Item 1</Dropdown.Item>
              <Dropdown.Item>Sub Item 2</Dropdown.Item>

              <Dropdown.Sub>
                <Dropdown.SubButton>Sub Sub Item</Dropdown.SubButton>
                <Dropdown.SubContent>
                  <Dropdown.Item>Sub Sub Item 1</Dropdown.Item>
                  <Dropdown.Item>Sub Sub Item 2</Dropdown.Item>
                </Dropdown.SubContent>
              </Dropdown.Sub>
            </Dropdown.SubContent>
          </Dropdown.Sub>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}

export default App;
