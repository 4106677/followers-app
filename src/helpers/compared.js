export const compared = (prevUsers, data) =>
  prevUsers.filter(
    prevAValue => !data.some(dataValue => prevAValue.id === dataValue.id)
  );
