// Import Matrial Ui Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Import Hooks
import { useState } from "react";

export default function AccordionComponent({ data, type }) {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => (eve, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <div
      className={`accordion ${
        type === "one" ? "w-[100%] min-md:w-[50%]" : "w-[100%]"
      } flex flex-col gap-4`}
    >
      {data.map((item) => {
        return (
          <Accordion
            expanded={expanded === item.id}
            key={item.id}
            className="rounded-one!"
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="icon text-light-navy" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                className="text-[15px]! font-[600]! text-light-navy!"
              >
                {item.title}
              </Typography>
            </AccordionSummary>

            <ul className="list">
              {item.list.map((item2) => {
                return (
                  <li key={item2.id} style={{ padding: "0 16px 8px" }}>
                    <AccordionDetails
                      className="text-[15px] text-dark-gray"
                      style={{ lineHeight: "1.4", padding: "0" }}
                    >
                      {item2.description}
                    </AccordionDetails>
                  </li>
                );
              })}
            </ul>
          </Accordion>
        );
      })}
    </div>
  );
}
