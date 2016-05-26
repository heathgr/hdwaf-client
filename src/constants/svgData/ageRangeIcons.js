//jscs:disable maximumLineLength

const ageRangeIcons = [
  'M6.362-16.446c4.562,0.093,7.285,3.924,8.058,6.043l5.64,18.734c1.144,4.073-3.996,5.745-5.238,1.813L9.786-7.18c0,0-1.612,0-1.612,0v43.223c0.032,5.353-7.571,5.2-7.67,0V10.997h-1.211v25.046c0.008,5.2-7.556,5.353-7.468,0c0,0,0-43.223,0-43.223h-1.612l-5.036,17.324c-1.242,3.932-6.382,2.26-5.238-1.813l5.64-18.734c0.773-2.119,3.495-5.95,8.058-6.043H6.362zM0-32.41c3.623,0,6.56,2.937,6.56,6.56s-2.937,6.56-6.56,6.56c-3.623,0-6.56-2.937-6.56-6.56S-3.623-32.41,0-32.41z',
  'M6.326-24.126c4.536,0.092,7.244,3.902,8.012,6.009l5.608,18.628c1.138,4.05-3.973,5.713-5.208,1.803L9.731-14.913c0,0-1.602,0-1.602,0v50.978c0.032,5.323-7.528,5.17-7.627,0V6.362h-1.204v29.704c0.008,5.17-7.513,5.323-7.426,0c0,0,0-50.978,0-50.978h-1.602l-5.008,17.226c-1.235,3.91-6.346,2.247-5.208-1.803l5.608-18.628c0.768-2.107,3.476-5.917,8.012-6.009H6.326zM0-40c3.602,0,6.523,2.92,6.523,6.523S3.602-26.955,0-26.955c-3.602,0-6.523-2.92-6.523-6.523S-3.602-40,0-40z',
  'M6.426-24.126c4.536,0.092,7.244,3.902,8.012,6.009l5.608,18.628c1.138,4.05-3.973,5.713-5.208,1.803L9.831-14.913l-1.602,0C9.62-3.211,9.889,2.199,8.629,2.928l-0.4,33.137c0.032,5.323-7.528,5.17-7.627,0V6.362c0,0-1.204,0-1.204,0v29.704c-0.098,5.17-7.659,5.323-7.627,0l-0.4-33.137c-1.26-0.729-0.992-6.139,0.4-17.841l-1.602,0l-5.008,17.226c-1.235,3.91-6.346,2.247-5.208-1.803l5.608-18.628c0.768-2.107,3.476-5.917,8.012-6.009H6.426zM0.1-40c-3.602,0-6.522,2.92-6.522,6.522c0,3.602,2.92,6.522,6.522,6.522c3.602,0,6.522-2.92,6.522-6.522C6.623-37.08,3.703-40,0.1-40z',
  'M6.431-24.115c4.54,0.092,7.249,3.905,8.018,6.013L20.061,0.54c1.139,4.053-3.976,5.717-5.212,1.804L9.838-14.895l-1.604,0C11.097-8.165,13.9,1.74,10.568,2.123c0.269,9.525-0.665,20.285-2.334,33.997c-0.652,5.173-7.534,5.174-7.632,0V6.395c0,0-1.205,0-1.205,0V36.12c-0.098,5.174-6.98,5.173-7.632,0c-1.669-13.712-2.603-24.472-2.334-33.997C-13.9,1.74-11.097-8.165-8.235-14.895l-1.604,0l-5.011,17.238c-1.236,3.913-6.35,2.249-5.212-1.804l5.613-18.641c0.769-2.109,3.478-5.921,8.018-6.013H6.431zM0.1-40c3.605,0,6.527,2.922,6.527,6.527S3.705-26.945,0.1-26.945c-3.605,0-6.527-2.922-6.527-6.527S-3.505-40,0.1-40z',
  'M22.805,11.958v26.912c0,0.624-0.531,1.13-1.155,1.13c-0.624,0-1.155-0.506-1.155-1.13V11.958c0-1.12-0.69-2.079-1.673-2.469c-0.653,0.392-1.432,0.44-2.125,0.08c-0.885,0.431-1.497,1.34-1.497,2.389c0,0.624-0.506,1.13-1.13,1.13s-1.13-0.505-1.13-1.129c0-1.77,0.941-3.322,2.349-4.187c-0.013-0.039-0.027-0.074-0.04-0.114c-1.512-4.779-2.163-10.47-4.714-16.208H9.028c1.007,4.058,3.986,12.759,2.726,14.06c1.127,8.352,1.57,18.415,0.286,30.894c-0.535,4.897-7.68,4.662-7.18-0.008C6.139,27.159,5.538,19.23,1.849,9.924H0.715c-3.69,9.306-4.291,17.238-3.012,26.475c0.501,4.67-6.645,4.915-7.18,0.018c-1.284-12.478-0.841-22.55,0.286-30.902C-10.45,4.214-7.471-4.491-6.465-8.549h-1.509c-2.551,5.738-3.202,11.433-4.714,16.212c-1.162,3.681-5.493,2.361-4.903-1.702c0.998-6.742,2.503-12.474,4.863-17.613c0.723-1.984,3.272-5.573,7.543-5.643H7.748c4.271,0.07,6.824,3.659,7.547,5.643c2.36,5.139,3.869,10.864,4.867,17.606c0.089,0.612,0.074,1.161-0.033,1.641C21.707,8.414,22.805,10.062,22.805,11.958zM1.61-17.691c3.391,0,6.141-2.749,6.141-6.141s-2.749-6.141-6.141-6.141c-3.391,0-6.141,2.749-6.141,6.141S-1.782-17.691,1.61-17.691z',
];

export default ageRangeIcons;
