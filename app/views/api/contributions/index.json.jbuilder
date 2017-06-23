@contributions.each do |contribution|
  json.set! contribution.id do
    json.partial! 'contribution', contribution: contribution
  end
end
