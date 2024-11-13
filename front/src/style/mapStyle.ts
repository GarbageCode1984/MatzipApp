const mapStyle = [
    {
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'transit.station.bus',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit.station.bus',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit.station.bus',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'simplified',
            },
        ],
    },
];

export default mapStyle;
