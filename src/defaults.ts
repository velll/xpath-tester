const expression = '/';
const xmlstring = `<?xml version="1.0" encoding="UTF-8"?>
<TrainingCenterDatabase>
  <Activities>
    <Activity Sport="Running">
      <Id>2020-12-12T12:00:45+00:00</Id>
      <Lap StartTime="2020-12-12T12:00:45+00:00">
        <TotalTimeSeconds>1935.0</TotalTimeSeconds>
        <DistanceMeters>5469.564798720001</DistanceMeters>
        <MaximumSpeed>10.137123744</MaximumSpeed>
        <Calories>490.999999717184</Calories>
        <Track>
          <Trackpoint>
            <Time>2020-12-12T12:00:52.507496+00:00</Time>
            <AltitudeMeters>210.93</AltitudeMeters>
            <DistanceMeters>10.14335823059082</DistanceMeters>
          </Trackpoint>
          <Trackpoint>
            <Time>2020-12-12T12:00:53.582401+00:00</Time>
            <AltitudeMeters>210.91</AltitudeMeters>
            <DistanceMeters>17.121572494506836</DistanceMeters>
          </Trackpoint>
          <Trackpoint>
            <Time>2020-12-12T12:00:54.570493+00:00</Time>
            <AltitudeMeters>210.89</AltitudeMeters>
            <DistanceMeters>21.78162956237793</DistanceMeters>
          </Trackpoint>
        </Track>
      </Lap>
    </Activity>
  </Activities>
</TrainingCenterDatabase>`;

const xmldoc = new DOMParser().parseFromString(xmlstring, "text/xml");

export { expression, xmlstring, xmldoc };