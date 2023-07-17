import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map1(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=36700588cf5a47d422008ec57bbb9ba3";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.484531, 126.896221),
          level: 5,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const markerPosition = new window.kakao.maps.LatLng(37.484531, 126.896221); // 마커가 표시될 위치입니다

        // const imageSrc = "/999.png"; // 마커이미지의 주소입니다
        // const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        // const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        // const markerImage = new window.kakao.maps.MarkerImage(
        //   imageSrc,
        //   imageSize,
        //   imageOption
        // );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          //   image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);

          // const lat = latlng.getLat();
          // const lng = latlng.getLng();
        });
      });
    };
  }, []);

  return (
    <>
      {/* lat={lat}
      lng={lng} */}
      <div id="map" style={{ width: "384px", height: "252px" }}></div>
    </>
  );
}
