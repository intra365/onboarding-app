import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import * as React from "react";
import { suggestedUPNs, suggestedUPNprefix } from "../../domains/users";

import { useState, useEffect } from "react";
import { Select } from '@chakra-ui/react';
interface SelectUPNProps {

   displayName?: string;
/**
 * UPN Selected
 */
   onSelected?: (upn:string) => void;
}
export default function SelectUPN({ displayName, onSelected }:SelectUPNProps) {
  const [upns, setupns] = useState<suggestedUPNprefix[]>([]);
  const [value, setValue] = useState<any>(null);
  useEffect(() => {
    let run = async () => {
      var data = await suggestedUPNs(displayName);
      setupns(data);
    };
    run();
  }, [displayName]);

  return (
    <Box>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          {upns.map((upn,key) => {
            return <Radio key={key} value={upn.prefix}>{upn.prefix}</Radio>;
          })}
        </Stack>
      </RadioGroup>
     
      <Button
        onSelect={(e) => {
          if (onSelected) onSelected(value);
        }}
        disabled={!value}
      >
        Select
      </Button>
    </Box>
  );
}

export function UPN(displayName) {
  const [upn, setupn] = useState<string>();
  return (
    <Box>
      <SelectUPN
        displayName={displayName}
        onSelected={(upn) => setupn(upn)}
      ></SelectUPN>
      <div>{upn}</div>
    </Box>
  );
}
