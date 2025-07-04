// import React from 'react';
// import { Breadcrumbs, Typography, Link } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';

// const BreadcrumbNav = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get path segments
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   return (
//     <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
//       <Link
//         underline="hover"
//         color="inherit"
//         onClick={() => navigate('/')}
//         sx={{ cursor: 'pointer' }}
//       >
//         Home
//       </Link>

//       {pathnames.map((value, index) => {
//         const to = '/' + pathnames.slice(0, index + 1).join('/');
//         const isLast = index === pathnames.length - 1;

//         return isLast ? (
//           <Typography color="text.primary" key={to}>
//             {decodeURIComponent(value)}
//           </Typography>
//         ) : (
//           <Link
//             underline="hover"
//             color="inherit"
//             onClick={() => navigate(to)}
//             key={to}
//             sx={{ cursor: 'pointer' }}
//           >
//             {decodeURIComponent(value)}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// };

// export default BreadcrumbNav;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Typography, Link } from '@mui/material';

const BreadcrumbNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Split current path into segments
  const pathnames = location.pathname.split('/').filter(Boolean);

  // Construct breadcrumb links dynamically
  const breadcrumbs = pathnames.map((value, index) => {
    const to = '/' + pathnames.slice(0, index + 1).join('/');
    return {
      label: value.charAt(0).toUpperCase() + value.slice(1), // Capitalize
      path: to
    };
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2,fontSize:'15px' }}>
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate('/')}
        sx={{ cursor: 'pointer' }}
      >
        Home
      </Link>

      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return isLast ? (
          <Typography key={crumb.path} color="text.primary" variant='' className="text-sm">
            {crumb.label}
          </Typography>
        ) : (
          <Link
            key={crumb.path}
            underline="hover"
            color="inherit"
            onClick={() => navigate(crumb.path)}
            sx={{ cursor: 'pointer' }}
          >
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbNav;
