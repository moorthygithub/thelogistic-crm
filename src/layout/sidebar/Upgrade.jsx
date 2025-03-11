// import { Box } from "@mui/material";

// export const Upgrade = ({ isCollapsed }) => {
//   return (
//     <>
//       {!isCollapsed ? (
//         <Box display={"flex"} alignItems="center" gap={2} sx={{ m: 3  }}>
//           <>
//             <h2 className="text-xs  text-red-600/80 border-b-2 border-dashed border-blue-600/80">
//               Updated On: 12-02-2025
//             </h2>

//           </>
//         </Box>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };
import { Box } from "@mui/material";

export const Upgrade = ({ isCollapsed }) => {
  const text = "Updated On: 11-03-2025";

  return (
    <>
      {!isCollapsed && (
        <Box display={"flex"} alignItems="center" gap={2} sx={{ m: 3 }}>
          <h2 className="text-xs text-red-600/80 border-b-2 border-dashed border-blue-600/80">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-waving"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </Box>
      )}
    </>
  );
};
