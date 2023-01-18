import React, { useState } from 'react';

type Props = {
  title?: string;
};

const Intro: React.FC<React.PropsWithChildren<Props>> = ({ children }) => <div>헬로우</div>;
export default Intro;
