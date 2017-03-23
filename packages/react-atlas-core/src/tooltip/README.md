Tooltip Examples

<section>
  <h5>Tooltip</h5>
  <p>Gives information on :hover</p>
  <Tooltip tooltip="Floating Tooltip" >
    <Button></Button>
  </Tooltip>
  <Tooltip tooltip="Tooltip on disabled item doesn't show">
    <Button disabled></Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip tooltip="Input tooltip" position="top" label="hello" type="text">
    <Input label="hello" type="text" />
  </Tooltip>
  <p>Lorem ipsum dolor sit amet, <Tooltip tooltip="Tooltip inside a sentence" inline><strong>consectetur</strong></Tooltip> adipiscing elit.</p>
</section>